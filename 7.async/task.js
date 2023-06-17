
class AlarmClock {
  constructor() {
    // Выделяем память для объекта
    // Создаем свойство alarmCollection для хранения звонков
    this.alarmCollection = [];
    // Создаем свойство intervalId для хранения id таймера
    this.intervalId = null;
  }

  addClock(time, callback) {
    // Проверяем, переданы ли параметры времени и колбека
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    // Проверяем, есть ли звонок с таким же временем
    const isExistingAlarm = this.alarmCollection.some(alarm => alarm.time === time);
    if (isExistingAlarm) {
      console.warn('Уже присутствует звонок на это же время');
      return;
    }

    // Добавляем звонок в коллекцию
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true
    });
  }

  removeClock(time) {
    // Удаляем звонки по указанному времени
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    // Возвращает текущее время в формате HH:MM
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    return  `${hours}:${minutes}`;
  }

  start() {
    // Проверяем наличие значения в свойстве intervalId
    if (this.intervalId) {
      return; // Если значение присутствует, завершаем выполнение метода
    }

    // Создаем новый интервал
    this.intervalId = setInterval(() => {
      // Перебираем все звонки
      this.alarmCollection.forEach(alarm => {
        // Проверяем условие запуска звонка
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false; // Устанавливаем значение canCall в false
          alarm.callback(); // Вызываем колбек звонка
        }
      });
    }, 1000); // Запускаем интервал каждую секунду
  }

  stop() {
    // Останавливаем выполнение интервала
    clearInterval(this.intervalId);
    // Сбрасываем значение из свойства intervalId
    this.intervalId = null;
  }

  resetAllCalls() {
    // Сбрасываем возможность запуска всех звонков
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    // Удаляем все звонки
    this.stop(); // Останавливаем интервал
    this.alarmCollection = []; // Переприсваиваем свойство alarmCollection в пустой массив
  }
}
/* eslint-disable import/extensions */
/* eslint-disable no-case-declarations */
/* eslint-disable no-restricted-syntax */
import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "./data-error.js";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(fleet) {
    for (const data of fleet) {
      switch (data.type) {
        case "car":
          if (this.validateCarData(data)) {
            const car = FleetDataService.loadCar(data);
            if (car) this.cars.push(car);
          } else {
            // const e = new DataError("Invalid car data", data);
            // this.errors.push(e);
          }
          break;
        case "drone":
          if (this.validateDroneData(data)) {
            const drone = FleetDataService.loadDrone(data);
            if (drone) this.drones.push(drone);
          } else {
            // const e = new DataError("Invalid drone data", data);
            // this.errors.push(e);
          }
          break;
        default:
          const e = new DataError("Invalid vehicle type", data);
          this.errors.push(e);
          break;
      }
    }
  }

  getCarByLicense(license) {
    return this.cars.find(car => {
      return car.license === license;
    });
  }

  getCarsSortedByLicense() {
    return this.cars.sort((car1, car2) => {
      if (car1.license < car2.license) return -1;
      if (car1.license > car2.license) return 1;
      return 0;
    });
  }

  filterCarsByMake(filter) {
    return this.cars.filter(car => car.make.indexOf(filter) > 0);
  }

  static loadCar(car) {
    try {
      const c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch (e) {
      this.errors.push(new DataError("error loading car", car));
    }
    return null;
  }

  static loadDrone(drone) {
    try {
      const d = new Drone(drone.license, drone.model, drone.latLong);
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch (e) {
      this.errors.push(new DataError("error loading drone", drone));
    }
    return null;
  }

  validateCarData(car) {
    const requiredProps = "license model latLong miles make".split(" ");
    let hasErrors = false;

    for (const field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, car));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push(new DataError("invalid mileage", car));
      hasErrors = true;
    }

    return !hasErrors;
  }

  validateDroneData(drone) {
    const requiredProps = "license model latLong airTimeHours base".split(" ");
    let hasErrors = false;

    for (const field of requiredProps) {
      if (!drone[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, drone));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
      this.errors.push(new DataError("invalid air time", drone));
      hasErrors = true;
    }

    return !hasErrors;
  }
}

export { FleetDataService as default };

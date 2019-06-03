/* eslint-disable no-console */
import $ from "jquery";
import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { Button } from "./ui/button.js";

const b = new Button("Click me");
b.appendToElement($("body"));

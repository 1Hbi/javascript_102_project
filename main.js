class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }

  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
      super(name, id, dateOfBirth);
      this.licenseId = licenseId;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
      super(name, id, dateOfBirth);
      this.licenseId = licenseId;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
    }
  }
     let car1 = new Car("Toyota", "Toyota Company", 1234, "Gas");
     let car2 = new Car("Tesla", "Tesla Company", 5678, "Electric");
     let car3 = new Car("Honda", "Honda Company", 91011, "Gas");

     let airplane1 = new Airplane("Boeing 747", "Boeing Company", 121314, "Commercial");
     let airplane2 = new Airplane("Airbus A380", "Airbus Company", 151617, "Commercial");

     let driver1 = new Driver("Ahmed", 1001, "01-01-1990", "D12345");
     let driver2 = new Driver("Ali", 1002, "02-02-1991", "D67890");

     let pilot1 = new Pilot("Youssef", 2001, "03-03-1989", "P12345");
     let pilot2 = new Pilot("Omar", 2002, "04-04-1992", "P67890");
     
     const reservations = []; 
     const reservation1 = new Reservation(new Date(), pilot1.id, airplane1.id,"1909");
          reservations.push(reservation1)
          reservations.map(reservation => console.log(reservation));

          const reservation2 = new Reservation(new Date(), driver1.id, car3.id,"1909");
          reservations.push(reservation2)
          reservations.map(reservation => console.log(reservation));

          const reservation3 = new Reservation(new Date(), pilot1.id, car1.id,"1909");
          reservations.push(reservation1)
          reservations.map(reservation => console.log(reservation));
         

     
          function makeReservation(employeeId, vehicleId) {
        
            let employee = employees.find((emp) => emp.id === employeeId);
        
            let vehicle = vehicles.find((veh) => veh.id === vehicleId);
        
           
            if (!employee || !vehicle) {
          
                console.log('Invalid employee or vehicle ID.');
          
                return;
        
            }
        
        
            if (employee instanceof Pilot && vehicle instanceof Car) {
          console.log('Cannot assign a car to a pilot.');
          return;
            }
        
        
            if (employee instanceof Driver && vehicle instanceof Plane) {
        
                console.log('Cannot assign a plane to a driver.');
         
                return;
        
            }
        
        
            let reservation = new Reservation(new Date(), employeeId, vehicleId, reserved.length + 1);
        
            reserved.push(reservation);
        
        
            console.log('Reservation created successfully.');
             }
         
          

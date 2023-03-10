# CarCar

Team:

- Elijah - Sales
- Diganta - Services

## Design

## Service microservice

The service microservice uses 5 models: ManufacturerVO, VehicleModelVO, AutomobileVO, Tehnician, and Appointments. The VO's poll their data from the Inventory model and grab only necessary information. This allows Appointments to access Inventory models information through foreign key's between the VO's, without changing or effecting the original data of Inventory.

## Sales microservice

The sales microservice contains 4 models: SalesRecord, Customer, SalesPerson, and AutomobileVO. SalesPerson stores the name and employee number, Customer stores the name, address, and phone number, and the automobileVO model grabs the vin, import_href, and determines whether the car is sold or not from the main inventory model without directly effecting or changing the main model. The SalesRecord model contains three foreign keys to the other three models. A poller was created to poll data from the main inventory port in order for the AutomobileVO to access its data.

## Bounded Contexts

Our project consists of four microservices that can communicate amongst each other. There is the Sales microservice, Service microservice, Inventory microservice, and the React user interface or front-end. The Sales and Service microservices interact with the Inventory microservice both through a poller, and the React user interface interacts with all three by fetching their information and using JavaScript logic to display the information in a specfic way on the website.

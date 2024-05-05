The Hospital Management System (HMS) is a comprehensive software solution designed to streamline the administrative and clinical operations of a hospital or healthcare facility. The system aims to improve efficiency, accuracy, and patient care by digitizing and automating various processes involved in hospital management.

Key Features:

Appointment Management: Patients can schedule, reschedule, or cancel appointments with doctors through an online portal. Doctors can view their appointment schedules and manage them accordingly.

Patient Management: The system maintains detailed records of patients including personal information, medical history, treatment plans, and prescribed medications. It allows for easy retrieval and updating of patient records by authorized personnel.

Doctor Management: The system manages information related to doctors, including their specialties, contact details, availability, and performance metrics. It facilitates efficient allocation of doctors to patients based on their expertise and availability.

Medical Records Management: The system digitizes and stores medical records securely, including diagnosis, treatment plans, laboratory test results, and imaging reports. Authorized healthcare professionals can access and update medical records as needed, ensuring continuity of care.

Billing and Invoicing: The system automates billing processes, generating invoices for services rendered, treatments provided, medications prescribed, and diagnostic tests conducted. It supports various payment methods and provides transparent billing information to patients.

Inventory Management: The system tracks inventory levels of medical supplies, equipment, and medications, ensuring adequate stock availability and minimizing stockouts or overstock situations. It triggers alerts for low stock levels and facilitates seamless procurement and replenishment processes.Entities:
Patient:

Attributes: ID, Name, Age, Gender, Contact Info
Relationships:
Appointments (One-to-Many): A patient can have multiple appointments.
Medical Records (One-to-Many): A patient can have multiple medical records.
Doctor:

Attributes: ID, Name, Specialty, Contact Info
Relationships:
Appointments (One-to-Many): A doctor can have multiple appointments.
Medical Records (One-to-Many): A doctor can create multiple medical records.
Appointment:

Attributes: ID, Date, Time
Relationships:
Patient (Many-to-One): An appointment is made by only one patient.
Doctor (Many-to-One): An appointment is assigned to only one doctor.
Medical Record:

Attributes: ID, Date, Diagnosis, Treatment
Relationships:
Patient (Many-to-One): A medical record is associated with only one patient.
Doctor (Many-to-One): A medical record is created by only one doctor.
User:

Attributes: ID, Username, Password, Role
Relationships:
Patient (One-to-One): A patient is authenticated by one user.
Doctor (One-to-One): A doctor is authenticated by one user.
Admin (One-to-One): An admin is authenticated by one user.
Functionalities:
Patient Functionality:

View appointments.
Schedule appointments.
View medical records.
Update personal information.
Doctor Functionality:

View appointments.
Create medical records.
Update medical records.
Update personal information.
Admin Functionality:

Manage patient and doctor information.
Manage appointments.
Generate reports.
Manage system settings.
Access Control:
Patients can access functionalities related to their appointments and medical records.
Doctors can access functionalities related to their appointments and medical records.
Admins have access to all functionalities and system settings.
Security:
Authentication: Users need to log in with a username and password.
Authorization: Access to functionalities is based on user roles (patient, doctor, admin).
Data Encryption: Patient and sensitive medical information should be encrypted to maintain confidentiality.



MySQL Database Tables


<img width="1440" alt="Db_Tables" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/357577e8-29cd-436c-b2f6-3f5cc5b41539">

<img width="1440" alt="Db_Table1" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/d207407b-0298-4ced-9f8e-e4eb2e0ffaf7">

<img width="1440" alt="Db_Table2" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/a0cb704f-ae62-4797-8d52-2f04f5bfecdd">

<img width="1440" alt="Db_Table3" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/9bc4f1db-0204-4ff9-8e6f-3b102a2939dd">

<img width="1440" alt="Db_Table4" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/51caf092-5cdf-4478-80b3-5284fe5a7830">

<img width="1440" alt="Db_Table5" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/5ce7da0c-ff01-4ff1-abcf-8330015200d8">

<img width="1440" alt="Db_Table6" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/4ac1b222-13eb-4d29-b09e-371556c2af44">

<img width="1440" alt="Screen Shot 2024-03-13 at 10 38 11 PM" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/9f284ca1-4ead-4994-afee-39859e1de028">

<img width="1440" alt="Screen Shot 2024-03-13 at 10 38 25 PM" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/08a750d4-de05-4e1e-b66d-9dd2456ba96b">

<img width="1440" alt="Screen Shot 2024-03-13 at 10 38 38 PM" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/0c43f26d-e4db-49f2-8d17-486b5b79f322">

<img width="1440" alt="Screen Shot 2024-03-13 at 10 38 49 PM" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/ae80096d-6ff3-474a-9092-64a3cf7fb528">

<img width="1440" alt="Screen Shot 2024-03-13 at 10 39 02 PM" src="https://github.com/GopichandMogaparthi210917/HospitalManagementSystem/assets/162054558/d3c825e3-d03f-41f0-a4b0-91d724b045ca">


















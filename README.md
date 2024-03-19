# Hyte application project

## You will find the back-end server codes in this repository.

## Here are some screenshots of the user interface.

### First the login page:
![Näyttökuva 2024-03-19 134536](https://github.com/ttinnar/webkurssi-BE/assets/111982172/eaa853d2-2e1d-4321-aa35-0f6e7b0f0402)

### In that page you can also create a new account:
![Näyttökuva 2024-03-19 132105](https://github.com/ttinnar/webkurssi-BE/assets/111982172/aa5c047f-06b5-49a2-a24f-6e1a0a5f45e3)

### When logging in and creating a user there will be alert telling you the job was succesful.
![Näyttökuva 2024-03-19 134518](https://github.com/ttinnar/webkurssi-BE/assets/111982172/d8cfe0b2-2aad-4686-9741-b88fe683e857)
![Näyttökuva 2024-03-19 144117](https://github.com/ttinnar/webkurssi-BE/assets/111982172/71b97e3a-08cf-42e9-a446-52cac8ee51a6)

### After logging in your redirected to your actual workout page where you can add entries:
![Näyttökuva 2024-03-19 134536](https://github.com/ttinnar/webkurssi-BE/assets/111982172/aa63ccd0-43b6-455f-9b17-b79e279a484a)
![Näyttökuva 2024-03-19 132624](https://github.com/ttinnar/webkurssi-BE/assets/111982172/759ae42c-85de-4336-bb0e-1b67cd2707d9)

### You can also see your previous workouts and edit and delete them:
![Näyttökuva 2024-03-19 132637](https://github.com/ttinnar/webkurssi-BE/assets/111982172/8e6c8fdd-891b-4b5d-891e-e4deddbff5e9)
![Näyttökuva 2024-03-19 132657](https://github.com/ttinnar/webkurssi-BE/assets/111982172/d438938e-e2e8-4e46-a3ac-2e2bc3dd44b6)
![Näyttökuva 2024-03-19 132818](https://github.com/ttinnar/webkurssi-BE/assets/111982172/0dd70fbf-b3f1-4e7c-a156-d0b59b060590)


## here is a link to the actual front-end application: 
trdns.northeurope.cloudapp.azure.com

## below you'll see the database:

```http
-- Drop the database if it exists and then create it
DROP DATABASE IF EXISTS HealthDiary;
CREATE DATABASE HealthDiary;

USE HealthDiary;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR(10) DEFAULT 'regular'
);

CREATE TABLE Workout_diary_entries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    workout VARCHAR(100) NOT NULL,
    duration INT,
    intensity VARCHAR(50),
    notes TEXT
);



-- Insert sample data

INSERT INTO Users (username, password, email, created_at, user_level) VALUES
('johndoe', 'hashed_password', 'johndoe@example.com', '2024-01-01 09:00:00', 'regular'),
('janedoe', 'hashed_password', 'janedoe@example.com', '2024-01-02 10:00:00', 'admin'),
('alice_jones', 'hashed_password', 'alice@example.com', '2024-01-04 08:30:00', 'regular'),
('bob_brown', 'hashed_password', 'bob@example.com', '2024-01-05 07:45:00', 'regular');
('jeesus', 'hashed_password', 'jeesus@gmail.com', '2024-03-03 07:30:00', 'regular');


-- Inserting additional sample data with a focus on weightlifting
INSERT INTO Workout_diary_entries (user_id, entry_date, workout, duration, intensity, notes)
VALUES
    (5, '2024-03-21', 'Strength Training', 60, 'High', 'Performed compound lifts: deadlifts, squats, and bench press'),
    (5, '2024-03-22', 'Bodybuilding', 90, 'High', 'Isolated muscle groups: biceps, triceps, and shoulders'),
    (6, '2024-03-23', 'Powerlifting', 75, 'High', 'Focused on heavy lifting with low repetitions'),
    (6, '2024-03-18', 'Weightlifting', 75, 'High', 'Focused on legs and back exercises'),
    (6, '2024-03-19', 'Yoga', 60, 'Low', 'Practiced hatha yoga for relaxation'),
    (6, '2024-03-20', 'Cycling', 90, 'Moderate', 'Rode bike outdoors for endurance training');
```
## Database is simple and it contains only Users and Workout_diary_entries. Below you see a picture of the tables and their primarykeys etc. 
![Näyttökuva 2024-03-19 190241](https://github.com/ttinnar/webkurssi-BE/assets/111982172/dfe234c9-48b7-4fbf-89c6-a7e435ea4a50)

## Sovelluksen toiminnallisuudet:
- Käyttäjän tekeminen
- Sisään kirjautuminen
- Treenimerkinnän tekeminen
- Treenimerkintöjen katsominen
    - niiden muokkaaminen
    - niiden poistaminen
- Uloskirjautuminen

## Mahdollisia ongelmia:
- Jostain syystä treenimerkintöjen muokkaaminen toimii yleensä, mutta joskus ei toimi.

## apuna käytetty ChatGPT








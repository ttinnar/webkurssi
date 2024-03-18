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



-- Inserting additional sample data with a focus on weightlifting
INSERT INTO Workout_diary_entries (user_id, entry_date, workout, duration, intensity, notes)
VALUES
    (5, '2024-03-21', 'Strength Training', 60, 'High', 'Performed compound lifts: deadlifts, squats, and bench press'),
    (5, '2024-03-22', 'Bodybuilding', 90, 'High', 'Isolated muscle groups: biceps, triceps, and shoulders'),
    (6, '2024-03-23', 'Powerlifting', 75, 'High', 'Focused on heavy lifting with low repetitions'),
    (6, '2024-03-18', 'Weightlifting', 75, 'High', 'Focused on legs and back exercises'),
    (6, '2024-03-19', 'Yoga', 60, 'Low', 'Practiced hatha yoga for relaxation'),
    (6, '2024-03-20', 'Cycling', 90, 'Moderate', 'Rode bike outdoors for endurance training');

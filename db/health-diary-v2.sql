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
    workout_type VARCHAR(100) NOT NULL,
    duration_minutes INT,
    intensity VARCHAR(50),
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE Workouts (
    workout_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    workout_name VARCHAR(100) NOT NULL,
    weight_lifted DECIMAL(10, 3) NOT NULL,
    reps INT NOT NULL,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE Gym_supplements (
    supplement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    supplement_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    protein_per_serving DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);



-- Insert sample data

INSERT INTO users (username, password, email, created_at, user_level) VALUES
('johndoe', 'hashed_password', 'johndoe@example.com', '2024-01-01 09:00:00', 'regular'),
('janedoe', 'hashed_password', 'janedoe@example.com', '2024-01-02 10:00:00', 'admin'),
('alice_jones', 'hashed_password', 'alice@example.com', '2024-01-04 08:30:00', 'regular'),
('bob_brown', 'hashed_password', 'bob@example.com', '2024-01-05 07:45:00', 'regular');

INSERT INTO diaryentries (user_id, entry_date, mood, weight, sleep_hours, notes, created_at) VALUES
(1, '2024-01-10', 'Happy', 70.5, 8, 'Had a great workout session', '2024-01-10 20:00:00'),
(2, '2024-01-11', 'Satisfied', 65.0, 7, 'Met with friends, had a good time', '2024-01-11 21:00:00'),
(3, '2024-01-12', 'Tired', 68.0, 6, 'Work was demanding', '2024-01-12 22:00:00'),
(4, '2024-01-13', 'Energetic', 55.0, 9, 'Went for a morning run', '2024-01-13 18:00:00'),
(4, '2024-01-14', 'Relaxed', 75.0, 8, 'Spent the day reading', '2024-01-14 19:00:00');

INSERT INTO medications (user_id, name, dosage, frequency, start_date, end_date) VALUES
(1, 'Vitamin D', '1000 IU', 'Daily', '2024-01-01', '2024-06-01'),
(2, 'Ibuprofen', '200 mg', 'As needed', '2024-01-05', '2024-01-20'),
(2, 'Amoxicillin', '500 mg', 'Every 8 hours', '2024-01-10', '2024-01-20'),
(4, 'Metformin', '500 mg', 'Twice a day', '2024-01-15', '2024-07-15'),
(2, 'Lisinopril', '10 mg', 'Daily', '2024-01-20', '2024-07-20');

INSERT INTO exercises (user_id, type, duration, intensity, date) VALUES
(1, 'Running', 30, 'High', '2024-01-10'),
(3, 'Cycling', 45, 'Medium', '2024-01-11'),
(2, 'Swimming', 55, 'Low', '2024-01-12'),
(1, 'Swimming', 30, 'Medium', '2024-01-16'),
(3, 'Swimming', 60, 'Low', '2024-01-18'),
(3, 'Yoga', 50, 'Low', '2024-01-18'),
(1, 'Weight Training', 40, 'High', '2024-01-19');

-- Inserting sample data into gym_workouts table
INSERT INTO gym_workouts (user_id, workout_name, weight_lifted, reps, date)
VALUES
    (1, 'Bench Press', 100, 10, '2024-03-15'),
    (1, 'Squats', 200, 8, '2024-03-16'),
    (2, 'Deadlifts', 250, 6, '2024-03-17');

-- Inserting sample data into gym_supplements table
INSERT INTO gym_supplements (user_id, supplement_name, price, protein_per_serving)
VALUES
    (1, 'Whey Protein', 29.99, 25),
    (1, 'Creatine Monohydrate', 19.99, 0),
    (2, 'BCAA', 24.99, 5);

-- Inserting additional sample data with a focus on weightlifting
INSERT INTO Workout_diary_entries (user_id, entry_date, workout_type, duration_minutes, intensity, notes)
VALUES
    (1, '2024-03-21', 'Strength Training', 60, 'High', 'Performed compound lifts: deadlifts, squats, and bench press'),
    (2, '2024-03-22', 'Bodybuilding', 90, 'High', 'Isolated muscle groups: biceps, triceps, and shoulders'),
    (1, '2024-03-23', 'Powerlifting', 75, 'High', 'Focused on heavy lifting with low repetitions'),
    (1, '2024-03-18', 'Weightlifting', 75, 'High', 'Focused on legs and back exercises'),
    (2, '2024-03-19', 'Yoga', 60, 'Low', 'Practiced hatha yoga for relaxation'),
    (1, '2024-03-20', 'Cycling', 90, 'Moderate', 'Rode bike outdoors for endurance training');


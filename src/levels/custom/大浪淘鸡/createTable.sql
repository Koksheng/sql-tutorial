CREATE TABLE if not exists chicken_observation (
    observation_id INT,
    observer_name VARCHAR(50),
    observation_date DATE,
    observation_location VARCHAR(50),
    wave_intensity INT
);

INSERT INTO chicken_observation (observation_id, observer_name, observation_date, observation_location, wave_intensity)
VALUES
    (1, 'John Smith', '2023-08-01', 'Big Wave Chickens Beach', 8),
    (2, 'Emily Johnson', '2023-08-02', 'East Coast Island', 4),
    (3, 'Michael Brown', '2023-08-03', 'Big Wave Chickens Beach', 9),
    (4, 'Emma Davis', '2023-08-04', 'Eye of the Ocean', 7),
    (5, 'Daniel Wilson', '2023-08-05', 'Big Wave Chickens Beach', 6),
    (6, 'Olivia Taylor', '2023-08-06', 'West Coast Island', 3),
    (7, 'Sophia Martinez', '2023-08-07', 'Big Wave Chickens Beach', 6),
    (8, 'William Anderson', '2023-08-08', 'Mysterious Bay', 9),
    (9, 'Isabella Thomas', '2023-08-09', 'Big Wave Chickens Beach', 5),
    (10, 'Liam Jackson', '2023-08-10', 'Heart of the Ocean', 8);

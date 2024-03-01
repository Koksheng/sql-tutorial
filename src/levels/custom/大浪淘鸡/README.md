# The Legend of the Chicken in the Big Waves

On a mysterious island, there is a legendary chicken known as the Big Wave Chicken. It stands tall and majestic, with feathers shimmering in the mysterious light. The islanders believe that the Big Wave Chicken is the embodiment of the ocean god, capable of controlling the waves and bringing either calm or turbulent seas. To verify this legend, the islanders have decided to observe and record the Big Wave Chicken.

There is a table called `chicken_observation` used to record observations of the Big Wave Chicken by the islanders. The table has the following fields: 

- `observation_id`: The ID of the observation record, uniquely identifying each observation.
- `observer_name`: The name of the observer.
- `observation_date`: The date of observation.
- `observation_location`: The location of the observation.
- `wave_intensity`: The intensity of the observed waves, represented as an integer. The higher the value, the more turbulent the waves.

Please write an SQL query to find the observation records where the location contains "Big Wave Chicken" and the wave intensity is greater than 5. Output the name of each observer (`observer_name`), the observation date (`observation_date`), and the observed wave intensity (`wave_intensity`).

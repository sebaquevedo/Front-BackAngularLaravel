<?php

return [
    'headers' => [
        'Access-Control-Allow-Origin' => '*',
        // 'Access-Control-Allow-Credentials' => 'true',
        'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers' => 'Origin, Content-Type, Authorization',
        'Access-Control-Max-Age' => '5', #duracion en segundos
    ],

    'credentials' => false,

    'origins' => [
        'http://localhost:4200',
    ],
];

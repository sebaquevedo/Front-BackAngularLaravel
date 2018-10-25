<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            [
                'name' => 'admin',
                'last_name' => 'admin',
                'id_admin' => 1,
                'email' => 'admin@innova4j.com',
                'password' => bcrypt('123456'),
            ]
        );
    }
}

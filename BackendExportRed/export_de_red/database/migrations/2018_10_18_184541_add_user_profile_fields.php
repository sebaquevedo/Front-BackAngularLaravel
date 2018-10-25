<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserProfileFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('last_name')->after('name')->nullable();
            $table->string('phone_number')->after('last_name')->nullable();
            $table->string('mobile_number')->after('phone_number')->nullable();
            $table->boolean('is_admin')->after('mobile_number');
            $table->string('rut')->after('mobile_number')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['last_name', 'phone_number', 'mobile_number', 'is_admin', 'rut']);
        });
    }
}

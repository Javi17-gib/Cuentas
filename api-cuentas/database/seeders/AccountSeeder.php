<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Account;
use Illuminate\Support\Facades\DB;

class AccountSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('accounts')->insert([
            'name' => 'Cuenta Principal',
            'ammount' => 1000.00,
            'status' => 'active',
            'user_id' => 1,
        ]);
    }
}

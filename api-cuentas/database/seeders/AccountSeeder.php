<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Account;

class AccountSeeder extends Seeder
{
    public function run(): void
    {
        Account::create([
            'name' => 'Cuenta Principal',
            'ammount' => 1000.00,
            'status' => 'active',
            'user_id' => 1,
        ]);
    }
}

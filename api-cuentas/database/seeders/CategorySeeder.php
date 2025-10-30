<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('categories')->insert([
            'name' => 'Comida',
            'type' => 'gasto',
            'user_id' => 1,
        ]);

        DB::table('categories')->insert([
            'name' => 'Salario',
            'type' => 'ingreso',
            'user_id' => 1,
        ]);
    }
}

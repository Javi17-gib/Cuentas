<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users';
    protected $fillable = [
        'name', 
        'email', 
        'password', 
        'img',
    ];

    protected $hidden = ['password', 'remember_token'];

    public function accounts() {
        return $this->hasMany(Account::class);
    }

    public function categories() {
        return $this->hasMany(Category::class);
    }

    public function transactions() {
        return $this->hasMany(Transaction::class);
    }
}

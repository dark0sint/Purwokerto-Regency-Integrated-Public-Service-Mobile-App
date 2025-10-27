// routes/api.php
use App\Http\Controllers\ServiceController;

Route::apiResource('services', ServiceController::class);

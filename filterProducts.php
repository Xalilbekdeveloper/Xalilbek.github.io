<?php
// filterProducts.php

header('Content-Type: application/json');

// Filtrlarni olish
$filters = isset($_POST['filters']) ? json_decode($_POST['filters'], true) : [];

// MySQL bazasiga ulanish
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Tekshiruv
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Filtrlarni qo'llash
$filterQuery = '';
if (!empty($filters)) {
    $filterList = array_map([$conn, 'real_escape_string'], $filters);
    $filterQuery = "WHERE type IN ('" . implode("','", $filterList) . "')";
}

$sql = "SELECT * FROM products $filterQuery";
$result = $conn->query($sql);

$products = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

echo json_encode(['products' => $products]);

$conn->close();
?>

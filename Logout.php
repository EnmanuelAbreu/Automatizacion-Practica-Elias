<?php
session_destroy();
header("location: index.php");
?>
Homepage:
<?php
session_start();
include("connect.php");

?>
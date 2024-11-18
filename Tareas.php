<?php 

include 'Connected.php';

if(isset($_POST['Agregar'])){
    $texto=$_POST['texto'];
    $tiempo=$_POST['tiempo'];

     $checkEmail="SELECT * From Tarea where texto='$texto'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "Email Address Already Exists !";
     }
     else{
        $insertQuery="INSERT INTO Tarea(texto,tiempo)
                       VALUES ('$texto','$tiempo')";
            if($conn->query($insertQuery)==TRUE){
                header("location: MiDia.html");
                echo"Se ha agregado";
            }
            else{
                echo "Error:".$conn->error;
                echo"No se ha agregado";
            }
     }
   

}

?>
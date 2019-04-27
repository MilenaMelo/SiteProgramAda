<?php


if(isset($_POST['email']) && !empty($_POST['email'])) {

    $name = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $phone = addslashes($_POST['phone']);
    $message = addslashes($_POST['message']);

    $to = "programadafsa@gmail.com";
    $subject = "Contato Formulário do Site ProgramAda";
    $body = "Nome: ".$name."\r \n".
            "Email: ".$email."\r \n".
            "Telefone: ".$phone."\r \n".
            "Mensagem: ".$message;
    $header = "From:programada@000webhostapp.com"."\r \n"."Reply-To:".$email."\r \n"."X=Mailer:PHP/".phpversion(); 

    mail($to,$subject,$body,$header);
    header("location: index.html");

}

            
?>
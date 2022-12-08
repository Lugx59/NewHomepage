<?php   
    /* 서버 접속 */
    $servername = "(서버 이름 입력)";
    $user = "(사용자명 입력)";
    $password = "(패스워드 입력)";
    $dbname = "(데이터베이스 이름 입력)";
    $connect = mysqli_connect($servername, $user, $password, $dbname);
    
    /* 서버 접속 확인 */
    if (!$connect) {
        die ("서버와의 연결 실패!: ".mysqli_connect_error());
    }
    echo "서버와의 연결 성공! <br>";

    /* SELECT 예제 */
    // $sql = "SELECT * FROM 테이블명";
    // $result = mysqli_query($conn, $sql);
    // while($row = mysqli_fetch_array($result)){
    //     echo $row['컬럼명']." ".$row['컬럼명']."<br>";
    // }
    
    // mysqli_close($conn);

     /* INSERT 예제 */
    //  $sql = "INSERT INTO DB명(column명, column명) VALUES('데이터','데이터')";
    //  $result = mysqli_query($conn, $sql);
      
    //  if($result) { echo "insert success!"; }
    //  else { echo "failure"; }
     
    //  mysqli_close($conn);
?>
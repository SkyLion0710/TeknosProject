## Requerimientos 

Descargar [NodeJS](https://nodejs.org/en/download/) para poder iniciar el servidor web, [MySQL](https://dev.mysql.com/downloads/installer/) para la creacion de la base de datos 

# MySQL

Durante la instalacion de MySQL seguiremos los siguientes pasos:

1. Seleccionamos la version '**Developer Default**' que incluye MySQL Server y MySQL Shell para ejecutar archivos sql.

![1](https://i.ibb.co/QYhYKMG/1.png)

2. Las credenciales del usuario root deben ser las siguientes:

- **Usuario**: root
- **Contraseña**: root

![3](https://i.ibb.co/hCnVnJg/6.png)

3. Verificamos la conexion a nuestra base de datos mediante '**Check**'

![4](https://i.ibb.co/qmxnYNt/8.png)

4. Finalizar instalacion.

![5](https://i.ibb.co/sKGWkd9/9.png)

5. Ahora abriremos **MySQL Shell**

![6](https://i.ibb.co/L9rPQqn/21.png)

6. Primero cambiamos a modo SQL ingresando: `\sql` y apretamos enter. Deberiamos ver como cambia de **JS** a **SQL**:

![7](https://i.ibb.co/KLp7BWc/22.png)

7. Nos conectaremos a nuestra base de datos ingresando `\connect root@localhost`

![8](https://i.ibb.co/FzJPk45/24.png)

8. Ahora ingresamos la **contraseña** de nuestro usuario root, la cual definimos anteriormente (acamica)

![9](https://i.ibb.co/MPn6Jkg/23.png)

9. Si todo esta bien, la conexion se realizara exitosamente y veremos nuestro server con el nombre **'localhost:33060+ ssl'**

![10](https://i.ibb.co/4fTt74c/25.png)

10. Ahora ejecutaremos nuestro archivo **script.sql** que se encuentra dentro de nuestro repositorio. 

![11](https://i.ibb.co/n7QMX1X/26.png)

11. Para correr el script, debemos ingresar: `source *RUTA DEL ARCHIVO*`
- Por ejemplo: `source C:\Users\brons\OneDrive\Escritorio\proyecto3-master\script.sql`

12. Si el script corrio bien, deberiamos ver algo como lo siguiente:

![12](https://i.ibb.co/NrmBhcG/28.png)

13. Cerrar MySQL Shell.

# NodeJS

1. Ahora instalaremos NodeJS en nuestro ordenador para tener un entorno de ejecucion en donde pueda correr nuestro servidor web.

![8](https://i.ibb.co/XsHvZ0C/19.png)

2. Seleccionaremos todo **Next** sin cambiar nada hasta completar la instalacion de NodeJS.

![9](https://i.ibb.co/5kScfFr/20.png)

3. Una vez instalado abriremos **Node.js command prompt** desde nuestra computadora.

![10](https://i.ibb.co/V3dnYC6/32.png)

4. Cambiamos el directorio apuntando hacia donde tengamos nuestros archivos utilizando: `cd *RUTA DEL ARCHIVO*`

![11](https://i.ibb.co/5FvmR1m/33.png)

5. Ahora ejecutaremos `npm install` para instalar todas las dependencias que tengamos en nuestro *package.json*. Cuando el proceso termine, deberias ver algo como esto:

![12](https://i.ibb.co/ZRjSmrh/34.png)

6. Estamos listos para correr nuestra API! Lo haremos ejecutando `node app`

![13](https://i.ibb.co/ZgMwvLq/35.png)




# TeknosProject

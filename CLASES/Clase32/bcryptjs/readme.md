https://www.npmjs.com/package/bcryptjs


--------------
¿Qué es Bcrypt?

Bcrypt es una biblioteca de cifrado de contraseñas que se utiliza para cifrar y verificar las contraseñas en aplicaciones web. Bcrypt utiliza una función de hashing unidireccional para cifrar las contraseñas. Es decir, una vez que se cifra una contraseña, no se puede desencriptar. Esto significa que no se puede recuperar la contraseña original a partir de la contraseña cifrada.

Bcrypt es un algoritmo de cifrado de contraseñas seguro y lento que utiliza una combinación de algoritmos hash y salting para proteger las contraseñas. El cifrado lento es importante porque hace que sea más difícil para los hackers descifrar las contraseñas cifradas a través de ataques de fuerza bruta.

¿Por qué usar Bcrypt?

Hay varias razones por las que deberíamos usar Bcrypt en nuestras aplicaciones Node.js:

Protección contra ataques de fuerza bruta: Bcrypt utiliza un cifrado lento que hace que sea más difícil para los hackers descifrar contraseñas cifradas mediante ataques de fuerza bruta. Esto ayuda a proteger las contraseñas de nuestros usuarios.
Protección contra ataques de diccionario: Bcrypt utiliza un salt aleatorio y único para cada contraseña cifrada. Esto significa que incluso si dos usuarios tienen la misma contraseña, la contraseña cifrada será diferente. Esto hace que sea más difícil para los hackers descifrar las contraseñas mediante ataques de diccionario.
Compatibilidad con diferentes plataformas: Bcrypt es compatible con diferentes plataformas, lo que significa que podemos utilizarlo en cualquier aplicación Node.js, independientemente de la plataforma que estemos utilizando.
Cómo usar Bcrypt

Para utilizar Bcrypt en Node.js, primero debemos instalar el paquete de Bcrypt en nuestro proyecto. Podemos hacer esto a través de npm utilizando el siguiente comando.

npm install bcrypt
Una vez que hemos instalado el paquete, podemos importarlo en nuestro proyecto Node.js de la siguiente manera:

const bcrypt = require('bcrypt');
Una vez que hemos importado Bcrypt en nuestro proyecto, podemos usar sus funciones para cifrar y verificar contraseñas.

Para cifrar una contraseña, podemos utilizar la función bcrypt.hash(). Esta función toma dos argumentos: la contraseña que queremos cifrar y un número llamado salt rounds. El número de salt rounds determina la complejidad del algoritmo de cifrado y cuánto tiempo tomará para que se complete el cifrado.

Aquí hay un ejemplo de cómo cifrar una contraseña utilizando Bcrypt:

const password = 'micontrasena123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Contraseña cifrada: ${hash}`);
});

¿Qué salt?
En criptografía, el salt es un agregado de random data que se concatena a una password antes de ser hasheada, con el objetivo de impedir ataques de fuerza bruta con diccionario

 se refiere a agregar datos aleatorios a la entrada de una función para garantizar una salida única, el hash, incluso cuando las entradas son las mismas. En la protección por contraseña, salt es una cadena de datos aleatoria que se utiliza para modificar un hash de contraseña.

¿Cómo funciona el bcrypt?
 Cuando un usuario crea una cuenta o cambia su contraseña, la biblioteca bcrypt genera un salt aleatorio y lo combina con la contraseña del usuario. Luego, esta contraseña salada se codifica utilizando un algoritmo computacionalmente costoso, lo que la hace resistente a los ataques de fuerza bruta

 bcryptjs
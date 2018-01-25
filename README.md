# coherence_node_app
Un proyecto para poder conectar nodejs con coherence a travez de rest api

Lo primero a hacer es instalar el producto de oracle (coherence)

Dependiendo del sistema operativo existen diferentes instaladores, en este caso se instalo la version 12.2.1.3.0, el nombre del instalador es fmw_12.2.1.3.0_coherence_Disk1_1of1.zip

una vez instalado definimos la variable de ambiente COHERENCE_HOME, apuntando al directorio de instalacion de coherence

Dentro de $COHERENCE_HOME/lib encontramos casi todas las dependencias requeridas para levantar el servicio rest.

Dependencias requeridas externas han sido colocadas en el directorio libs de este proyecto.

Dentro de la carpeta rest encontraremos todo para poder iniciar le proyecto. Primero debemos compilar la clase java (Persona.java) para usado para definir el esquema del cache. Posteriormenteusamos el archivo startServer.sh para iniciar el servicio rest de coherence.

Observaremos un mensaje de :
    Started DefaultCacheServer...

En la consola observaremos que el puerto 8080 ha sido abierto para recibir peticiones. Una vez iniciado todo podemos ejecutar isntrucciones del archivo culrCommands para lanzar peticiones rest. (Solo hay que actualizar la ip del servicio)



Dependiendo de la utileria de node a usar pueden encontrarse algunos problemas

usando el nodeHttp.js arroja:

2018-01-24 21:20:00.135/535.603 Oracle Coherence GE 12.2.1.3.0 <Info> (thread=DefaultHttpServerThread-2, member=2): Caught unhandled exception while processing an HTTP request: java.lang.UnsupportedOperationException: Method suspend is not support by the container.
	at com.tangosol.coherence.rest.server.DefaultHttpServer$HttpServerContainer$Writer.suspend(DefaultHttpServer.java:492)
	at org.glassfish.jersey.server.ServerRuntime$Responder.writeResponse(ServerRuntime.java:741)
	at org.glassfish.jersey.server.ServerRuntime$Responder.processResponse(ServerRuntime.java:424)
	at org.glassfish.jersey.server.ServerRuntime$Responder.process(ServerRuntime.java:414)
	at org.glassfish.jersey.server.ServerRuntime$2.run(ServerRuntime.java:311)




El archivo nodeExamples.js contiene codigo para ejecutar acciones contra el api rest generada.

Se requiere instalar la dependencia de node
 npm install unirest async

Despues se puede ejecutar el nodeUnirestAsync.js.

Cabe mencionar que si uno no implementa adecuadamente la llamada rest, puede que obtenga errores en el servidor como:

2018-01-25 16:06:53.604/1196.812 Oracle Coherence GE 12.2.1.3.0 <Info> (thread=DefaultHttpServerThread-17, member=1): Caught unhandled exception while processing an HTTP request: java.lang.UnsupportedOperationException: Method suspend is not support by the container.
	at com.tangosol.coherence.rest.server.DefaultHttpServer$HttpServerContainer$Writer.suspend(DefaultHttpServer.java:492)
	at org.glassfish.jersey.server.ServerRuntime$Responder.writeResponse(ServerRuntime.java:741)
	at org.glassfish.jersey.server.ServerRuntime$Responder.processResponse(ServerRuntime.java:424)
	at org.glassfish.jersey.server.ServerRuntime$Responder.process(ServerRuntime.java:414)



En general es confiable el api.
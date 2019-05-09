COHERENCE_HOME=/home/carlospatinos/development/Oracle/Middleware/Oracle_Home/coherence

#java -cp .:./lib/*:$COHERENCE_HOME/lib/coherence.jar:$COHERENCE_HOME/lib/coherence-rest.jar  -Dtangosol.coherence.cacheconfig=example-server-config.xml com.tangosol.net.DefaultCacheServer

java -cp .:./libs/*:$COHERENCE_HOME/lib/coherence.jar:$COHERENCE_HOME/lib/coherence-rest.jar  -Dtangosol.coherence.cacheconfig=example-server-config.xml com.tangosol.net.DefaultCacheServer
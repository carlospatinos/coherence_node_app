COHERENCE_HOME=/home/carlospatinos/development/Oracle/Middleware/Oracle_Home/coherence
java -cp $COHERENCE_HOME/config:$COHERENCE_HOME/lib/coherence.jar -Dtangosol.coherence.distributed.localstorage=true com.tangosol.net.DefaultCacheServer 
#-Dtangosol.coherence.clusteraddress=224.1.1.1
#-Dtangosol.coherence.clusteraddress=224.1.1.1 -Dtangosol.coherence.distributed.localstorage=true -Dtangosol.coherence.cluster=CLUSTER_NAME

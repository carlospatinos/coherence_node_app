COHERENCE_HOME=/home/ecapati/development/Oracle/Middleware/Oracle_Home/coherence
javac -cp $COHERENCE_HOME/lib/coherence.jar HelloWorld.java

java -cp $COHERENCE_HOME/lib/*:.:$COHERENCE_HOME/config -Dcoherence.distributed.localstorage=false HelloWorld

# -Dtangosol.coherence.clusteraddress=224.1.1.1 -Dtangosol.coherence.cluster=CLUSTER_NAME -Dcoherence.distributed.localstorage=false
# -Dtangosol.coherence.distributed.localstorage=false -Dtangosol.coherence.session.localstorage=true -Dtangosol.coherence.cluster=CLUSTER_NAME -Dtangosol.coherence.clusteraddress=224.1.1.1

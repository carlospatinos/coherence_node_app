COHERENCE_HOME=/home/ecapati/development/Oracle/Middleware/Oracle_Home/coherence
java -cp $COHERENCE_HOME/config:$COHERENCE_HOME/lib/coherence.jar com.tangosol.net.DefaultCacheServer | tee console.log

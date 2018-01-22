COHERENCE_HOME=/home/ecapati/development/Oracle/Middleware/Oracle_Home/coherence
javac -cp $COHERENCE_HOME/lib/coherence.jar HelloWorld.java

java -cp $COHERENCE_HOME/lib/*:.:$COHERENCE_HOME/config -Dcoherence.distributed.localstorage=false HelloWorld

SERVER="10.0.0.111:8080"

curl -X PUT -H "Content-Type: application/json" -d '{"name":"chris","age":30}' http://$SERVER/dist-http-example/1
curl -X PUT -H "Content-Type: application/json" -d '{"name":"adam","age":26}' http://$SERVER/dist-http-example/2


curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://$SERVER/dist-http-example/1.json
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://$SERVER/dist-http-example/1.xml
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://$SERVER/dist-http-example/?q=name is 'adam'
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://$SERVER/dist-http-example/;p=name
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET "http://$SERVER/dist-http-example/count()"
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET "http://$SERVER/dist-http-example/double-average(age)"

#https://docs.oracle.com/cd/E24290_01/coh.371/e22839/rest_example.htm#COHCG5237
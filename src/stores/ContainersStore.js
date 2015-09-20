import { register } from '../core/Dispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';

const ContainersStore = createStore({
  get() {
    return [{"Id":"24e12a6866e5ff3c721203c093fd9aeb81ecd19d2e9b52faec6789ca0e47ddee","Names":["/debian/shipyard_swarm_1"],"Image":"swarm:latest","Command":"/swarm m --host tcp://0.0.0.0:2375 proxy:2375","Created":1442701320,"Status":"Exited (0) 31 seconds ago","Ports":[{"IP":"172.17.0.3","PrivatePort":2375,"PublicPort":32769,"Type":"tcp"}],"SizeRw":0,"SizeRootFs":0,"Labels":{"com.docker.compose.config-hash":"43b13fe0b1bc1f73ecd88d3f601f85b07eb28890382fb6e8604664b0333cea28","com.docker.compose.container-number":"1","com.docker.compose.oneoff":"False","com.docker.compose.project":"shipyard","com.docker.compose.service":"swarm","com.docker.compose.version":"1.5.0dev"}},{"Id":"b185d23fcdfe60dbbcbca1d2180117a8d4f1bdbd450741cdc6041dabd8b29c25","Names":["/debian/shipyard_proxy_1","/debian/shipyard_swarm_1/proxy","/debian/shipyard_swarm_1/proxy_1","/debian/shipyard_swarm_1/shipyard_proxy_1"],"Image":"ehazlett/docker-proxy:latest","Command":"/usr/local/bin/run","Created":1442701320,"Status":"Up 31 seconds","Ports":[{"IP":"172.17.0.3","PrivatePort":2375,"PublicPort":32768,"Type":"tcp"}],"SizeRw":0,"SizeRootFs":0,"Labels":{"com.docker.compose.config-hash":"b97fa1b53abaf2862e91d1f66950a722b10f73c50cea99f59af1e02d43739efa","com.docker.compose.container-number":"1","com.docker.compose.oneoff":"False","com.docker.compose.project":"shipyard","com.docker.compose.service":"proxy","com.docker.compose.version":"1.5.0dev"}},{"Id":"4c14e4f37727eb5db253b415770388d02f5fe2f15eb8c48772f3c2f1250ef596","Names":["/debian/condescending_mayer"],"Image":"redis","Command":"/entrypoint.sh redis-server","Created":1442682627,"Status":"Up 5 hours","Ports":[{"IP":"","PrivatePort":6379,"PublicPort":0,"Type":"tcp"}],"SizeRw":0,"SizeRootFs":0,"Labels":{}}];
  }
});

export default ContainersStore;

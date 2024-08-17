import { Dimensions} from 'react-native';
export const BLOCKSIZE = 100

export const Pieces = [
    {
      name:'caocao',
      img:require("./assets/caocao.png"),
      width:BLOCKSIZE * 2,
      height:BLOCKSIZE * 2,
      x : BLOCKSIZE,
      y:  0
    },
    {
      name:'guanyu',
      img:require("./assets/guanyu.png"),
      width:200,
      height:100,
      x : BLOCKSIZE,
      y:  BLOCKSIZE * 2
    },
    {
      name:'zhangfei',
      img:require("./assets/zhangfei.png"),
      width:100,
      height:200,
      x : 0,
      y:  0
    }  
  ];
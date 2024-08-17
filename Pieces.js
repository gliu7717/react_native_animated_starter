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
    },
    {
      name:'zhaoyun',
      img:require("./assets/zhaoyun.png"),
      width:100,
      height:200,
      x : BLOCKSIZE*3,
      y:  0
    },
    {
      name:'machao',
      img:require("./assets/machao.png"),
      width:100,
      height:200,
      x : 0,
      y:  BLOCKSIZE * 2
    },
    {
      name:'huangzhong',
      img:require("./assets/huangzhong.png"),
      width:100,
      height:200,
      x : BLOCKSIZE *3,
      y:  BLOCKSIZE *2
    },
    {
      name:'solidier1',
      img:require("./assets/soldier.png"),
      width:100,
      height:100,
      x : 0,
      y: BLOCKSIZE *4
    },
    {
      name:'solidier2',
      img:require("./assets/soldier.png"),
      width:100,
      height:100,
      x : BLOCKSIZE *3,
      y: BLOCKSIZE  *4
    },
    {
      name:'solidier3',
      img:require("./assets/soldier.png"),
      width:100,
      height:100,
      x : BLOCKSIZE ,
      y : BLOCKSIZE *3
    },
    {
      name:'solidier4',
      img:require("./assets/soldier.png"),
      width:100,
      height:100,
      x : BLOCKSIZE*2 ,
      y : BLOCKSIZE *3
    }  

  ];
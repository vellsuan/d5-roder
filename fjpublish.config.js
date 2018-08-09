module.exports = {
  //modules开始   里面可以配置多个环境，比如测试环境，预发布环境，和正式环境
  modules: [{
      name: '测试环境', // 设置发布环境的名称易于辨识,就是起个名字
      env: 'test',    // 发布环境的唯一标识符
      ssh: {          // 服务器的ssh配置，不知道的自己问运维大哥
          host: '49.4.5.233',
          port: 22,
          user: 'root',
          userName: 'root',
          password: 'CANyin_+0928',
      },
      buildCommand: 'build',  //这个意思是运行的时候可以自动构建，这个必须放你构建时候的代码，我这里构建用的是npm run build，所以写build
      localPath: 'dist',      // 要发布的文件夹的根目录，建议用相对路径，如果当前不存在，build后产生的文件夹，也要写这个不存在的文件夹名
      remotePath: '/data/xr-order', // 要发布到远程服务器的路径，必须是一个二级及以上的绝对目录路径，
      tag: '123'
  },{
    name: '咖啡测试环境',
    env: 'pre_release',
    ssh: {
        host: '117.78.39.152',
        port: 22,
        user: 'root',
        userName: 'root',
        password: 'KAfei++0407',
    },
    buildCommand: 'build',
    localPath: 'dist',
    remotePath: '/data/branches-webapp/branches-koa2-order',
    tag: 'v1.0'
},{  // 以下内容为假数据，到时候改成真实服务器地址
  name: '正式环境',
  env: 'publish',
  ssh: {
      host: '00.0.0.0',
      port: 22,
      user: 'root',
      userName: 'root',
      password: 'password',
  },
  buildCommand: 'build',
  localPath: 'dist',
  remotePath: '/data/d5-meal',
  tag: 'v1.0'
}],
  //modules结束
 // nobuild: true,     //  如果写了，就不默认运行上线命令的时候运行npm run build
  tag: 'v1.0',
  afterHooks: {  // 控制台打印一些信息，可有可无吧
    when: 'prompt',
    fn({ name, ssh: { host }, localPath = '.', localPathEntries = [], remotePath, nobackup = false, nobuild = false, merge = false }, env, next) {
        console.log(`Config: ...
                    name: %s
                    env: %s
                    host: %s
                    ======
                    local path: %s
                    local entries: %s
                    remote path: %s
                    ======
                    nobuild: %s
                    nobackup: %s
                    merge: %s
                    `, name, env, host, localPath, localPathEntries, remotePath, nobuild, nobackup, merge);
                            next();
                    },
          }
}
// 服务器上删除文件  rm -rf 文件名
//fjpublish env -s/-m  标准发布
// -s 以单选提示器的方式选择发布环境。vue用过      -m   以多选提示器的方式选择发布环境, 单选和多选只需要配置其中之一即可。
//  -d  开启差异化（diff）发布，发布项目时只上传有改动或新增的文件，这样做能大大提升项目上传的速度。自动开启merge，和服务器文件对比，但是不能禁用历史记录功能。想想也好理解

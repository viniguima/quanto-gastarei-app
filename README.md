<div style="background: #2a3540; border-radius: 12px; padding: 20px">
<img style="background: #2a3540;" src="public/images/logo-branca.png" alt="Logo do Quanto Gastarei">
<h3 style="color: white"> Comandos de preparacao do ambiente</h3>

<h4 style="color: white;">Instalar o <i>nodejs</i> e o <i>yarn</i></h4>

<div style="background: #1c242b; border-radius: 12px; padding: 20px; color: white;">
    sudo apt update<br>
    sudo apt install nodejs<br>
    sudo apt install npm<br>
    sudo npm install -g yarn
</div>
<h4 style="color: white;">Instalar o <i>Java</i> e o <i>JDK</i></h4>
<div style="background: #1c242b; border-radius: 12px; padding: 20px; color: white;">
 sudo apt install default-jre<br>
 sudo apt install default-jdk
</div>

<h4 style="color: white;">Instalação do <i>ASDF</i> (Gerenciador de versões do Nodejs entre outros)</h3>
<div style="background: #1c242b; border-radius: 12px; padding: 20px;">   
    <a href="https://asdf-vm.com/guide/getting-started.html">asdf-vm.com/guide/getting-started.html</a>
</div>
<h3 style="color: white;"> Dentro da pasta do projeto rode:</h3>

<h4 style="color: white;"> Comandos para configurar a versão correta do node</h4>
<div style="background: #1c242b; border-radius: 12px; padding: 20px; color: white;"> 
asdf install nodejs 16.17.0<br>
asdf global nodejs 16.17.0
</div>
<h4 style="color: white;"> Comando para instalar os node_modules</h4>
<div style="background: #1c242b; border-radius: 12px; padding: 20px; color: white;">
    yarn
</div>
<h4 style="color: white;"> Comando para iniciar o projeto pela web</h4>
<div style="background: #1c242b; border-radius: 12px; padding: 20px; color: white;">
    yarn web
</div>

 <h3 style="color: white;">! Existem outros comandos dentro do arquivo </h3>

<div style="background: #1c242b; border-radius: 12px; padding: 20px; color: white;">
    package.json => scripts
</div>


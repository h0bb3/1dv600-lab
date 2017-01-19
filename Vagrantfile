Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty32"

  config.vm.network "forwarded_port", guest: 9090, host: 9090

  config.vm.provision "shell", inline: <<-SHELL
	  sudo apt-get update
	  apt-get install -y build-essential python wget

	  #https://github.com/nodesource/distributionss
	  curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
	  sudo apt-get install -y nodejs

	  cd /vagrant
	  sudo npm install --no-bin-links
	  sudo npm install -g nodemon
	  sudo npm install -g mocha
	  echo "cd /vagrant" >> /home/vagrant/.bashrc
  SHELL

  config.vm.provision "shell", run:"always", privileged:false, inline: <<-SHELL
	  cd /vagrant
	  sudo npm install --no-bin-links
	  npm start
  SHELL
end

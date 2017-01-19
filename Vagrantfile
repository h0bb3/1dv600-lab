Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 9090, host: 9090

  config.vm.provision "shell", inline: <<-SHELL
    sudo add-apt-repository ppa:cwchien/gradle
    apt-get update && apt-get install -y unzip && rm -rf /var/lib/apt/lists/*

    #Installing Java 8
    wget --no-check-certificate https://github.com/aglover/ubuntu-equip/raw/master/equip_java8.sh && bash equip_java8.sh

    # Installing Gradle
    sudo apt-cache search gradle
    sudo apt-get install -y gradle

    # Set Gradle Environmental Variables
    export GRADLE_HOME=/usr/bin/gradle
    export PATH=$PATH:$GRADLE_HOME/bin

  SHELL

  config.vm.provision "shell", run:"always", privileged:false, inline: <<-SHELL
	  cd /vagrant
	  gradle test run --info
  SHELL

end

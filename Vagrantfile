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

    # hack to get things working as Oracle has temporarily(?) moved the download
    cd /var/lib/dpkg/info

    sudo sed -i 's|JAVA_VERSION=8u151|JAVA_VERSION=8u161|' oracle-java8-installer.*
    sudo sed -i 's|PARTNER_URL=http://download.oracle.com/otn-pub/java/jdk/8u151-b12/e758a0de34e24606bca991d704f6dcbf/|PARTNER_URL=http://download.oracle.com/otn-pub/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/|' oracle-java8-installer.*
    sudo sed -i 's|SHA256SUM_TGZ="c78200ce409367b296ec39be4427f020e2c585470c4eed01021feada576f027f"|SHA256SUM_TGZ="6dbc56a0e3310b69e91bb64db63a485bd7b6a8083f08e48047276380a0e2021e"|' oracle-java8-installer.*
    sudo sed -i 's|J_DIR=jdk1.8.0_151|J_DIR=jdk1.8.0_161|' oracle-java8-installer.*

    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get --assume-yes update
    sudo apt-get --assume-yes install oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
    # end hack

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

from setuptools import setup
from setuptools.command.install import install
from subprocess import check_call

class PostInstallCommand(install):
  def run(self):
    check_call("apt-get install -y nodejs", shell=True)
    check_call("npm install -g typedoc", shell=True)
    install.run(self)

setup(
  name='docs',
  cmdclass={
    'install': PostInstallCommand
  }
)

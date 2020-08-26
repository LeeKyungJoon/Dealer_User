echo '*****************************************'
echo 'Remove node_modules folder'
echo '*****************************************'
rm -rf ./node_modules
echo '*****************************************'
echo 'Yarn install'
echo '*****************************************'
yarn install
echo '*****************************************'
echo 'iOS Clean Start'
echo '*****************************************'
rm -rf ./ios/Podfile.lock
rm -rf ./ios/Pods
rm -rf ./ios/*.xcworkspace
npx pod-install
echo '*****************************************'
echo 'Android Clean Start'
echo '*****************************************'
rm -rf ./android/.idea
rm -rf ./android/build
rm -rf ./android/.gradle
cd ./android && ./gradlew clean && cd ..
echo 'Finished'

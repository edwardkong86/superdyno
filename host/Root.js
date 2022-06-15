import * as React from 'react';
import {Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChunkManager} from '@callstack/repack/client';
// import {ReanimatedComponent} from './ReanimatedComponent'

ChunkManager.configure({
  forceRemoteChunkResolution: true,
  resolveRemoteChunk: async (chunkId, parentId) => {
    let url;

    switch (parentId) {
      case 'home':
        url = `http://localhost:9090/${chunkId}.chunk.bundle`;
        break;
      case 'banking':
        url = `http://localhost:9091/${chunkId}.chunk.bundle`;
        break;
      case 'wallet':
        url = `http://localhost:9092/${chunkId}.chunk.bundle`;
        break;
      case 'expense':
        url = `http://localhost:9093/${chunkId}.chunk.bundle`;
        break;
      case 'profile':
        url = `http://localhost:9094/${chunkId}.chunk.bundle`;
        break;
      case 'main':
      default:
        url =
          {
            // containers
            home: 'http://localhost:9090/home.container.bundle',
            banking: 'http://localhost:9091/banking.container.bundle',
            wallet: 'http://localhost:9092/wallet.container.bundle',
            expense: 'http://localhost:9093/expense.container.bundle',
            profile: 'http://localhost:9094/profile.container.bundle',
          }[chunkId] ?? `http://localhost:8081/${chunkId}.chunk.bundle`;
        break;
    }
    console.log('resolveRemoteChunk', chunkId, parentId, url);
    return {
      url,
      query: {
        platform: Platform.OS,
      },
      excludeExtension: true,
    };
  },
});

async function loadComponent(scope, module) {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default');
  // Download and execute container
  await ChunkManager.loadChunk(scope, 'main');

  const container = self[scope];
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  const exports = factory();
  return exports;
}

// function Wrapper(scope, module) {
//   const Component = React.lazy(() => loadComponent(scope, module));
//   return (
//     <React.Suspense fallback={<Text style={{textAlign: 'center'}}>Loading...</Text>}>
//       <Component />
//     </React.Suspense>
//   );
// }

// function SuspenseTimeout() {
//   const [isTimeout, setIsTimeout] = React.useState(false);

//   // React.useEffect(() => {
//   //   setTimeout(() => {
//   //     setIsTimeout(true);
//   //   }, 10000);
//   // }
//   // );
//   return isTimeout ? (
//     <Text style={{textAlign: 'center'}}>Fail Loading</Text>
//   ) : (
//     <Text style={{textAlign: 'center'}}>Loading...</Text>
//   );
// }
// function DashboardWrapper() {
//   return Wrapper('dashboard', './App.js');
// }
// function BankingWrapper() {
//   return Wrapper('banking', './App.js');
// }
// function WalletWrapper() {return Wrapper('app2', './App.js')}
// function ExpensesWrapper() {return Wrapper('banking', './App.js')}
const HomeComponent = React.lazy(() => loadComponent('home', './App.js'));

const BankingComponent = React.lazy(() => loadComponent('banking', './App.js'));
const WalletComponent = React.lazy(() => loadComponent('wallet', './App.js'));
const ExpenseComponent = React.lazy(() => loadComponent('expense', './App.js'));
const ProfileComponent = React.lazy(() => loadComponent('profile', './App.js'));

function HomeWrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{textAlign: 'center'}}>Loading...</Text>}>
      <HomeComponent />
    </React.Suspense>
  );
}

function BankingWrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{textAlign: 'center'}}>Loading...</Text>}>
      <BankingComponent />
    </React.Suspense>
  );
}

function WalletWrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{textAlign: 'center'}}>Loading...</Text>}>
      <WalletComponent />
    </React.Suspense>
  );
}

function ExpenseWrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{textAlign: 'center'}}>Loading...</Text>}>
      <ExpenseComponent />
    </React.Suspense>
  );
}

function ProfileWrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{textAlign: 'center'}}>Loading...</Text>}>
      <ProfileComponent />
    </React.Suspense>
  );
}

const Tab = createBottomTabNavigator();

export function Root() {
  return (
    <NavigationContainer>
      {/* <ReanimatedComponent backgroundColor="red" /> */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          unmountOnBlur: true,
        }}>
        <Tab.Screen name="Home" component={HomeWrapper} />
        <Tab.Screen name="Banking" component={BankingWrapper} />
        <Tab.Screen name="Wallet" component={WalletWrapper} />
        <Tab.Screen name="Expense" component={ExpenseWrapper} />
        <Tab.Screen name="Profile" component={ProfileWrapper} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Root;

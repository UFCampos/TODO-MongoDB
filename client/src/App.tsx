import './App.css';
import AddTodo from './pages/addTodo/AddTodo';
import {Navbar, NavbarItem, NavbarBrand, NavbarContent, Button} from '@nextui-org/react';

function App(): React.JSX.Element {
	return (
		<div>
			<Navbar>
				<NavbarBrand>
					<h1 className='font-bold text-inherit'>TODO App MongoDb</h1>
				</NavbarBrand>
				<NavbarContent className='hidden sm:flex gap-4' justify='center'>
					<NavbarItem>
						<Button color='primary'>
            My Todos
						</Button>
					</NavbarItem>
					<NavbarItem isActive>
					</NavbarItem>
					<NavbarItem>
						<Button color='primary'>
            Integrations
						</Button>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify='end'>
					<NavbarItem className='hidden lg:flex'>
						<Button color='secondary' variant='shadow'>Login</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color='primary' variant='flat'>
            Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<AddTodo />
		</div>
	);
}

export default App;

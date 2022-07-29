import { Navbar } from '../../src/components';
import * as React from 'react';

describe('Navbar', () => {
	it('mounts', () => {
		cy.mount(<Navbar />);
	});
});

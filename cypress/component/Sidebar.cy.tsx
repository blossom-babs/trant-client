import * as React from 'react';
import { Sidebar } from '../../src/components';

describe('Sidebar.cy.ts', () => {
	it('mounts', () => {
		cy.mount(<Sidebar/>);
		cy.contains('Categories')
		cy.get('[data-cy="available-cat"] li').should('have.length', 2)
	});
});

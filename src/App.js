import React from 'react';
import { 
  Layout,
  Page
} from '@shopify/polaris';

import Form from './components/Form'
import NewForm from './components/NewForm';

function App() {
    return (
      <Page title="Polaris">
        <Layout>
          <Layout.Section>
            <NewForm />
          </Layout.Section>
        </Layout>
      </Page>
    );
}

export default App

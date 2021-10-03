import React from 'react';
import { 
  Layout,
  Page
} from '@shopify/polaris';

import Form from './components/Form'

function App() {
    return (
      <Page title="Polaris">
        <Layout>
          <Layout.Section>
            <Form />
          </Layout.Section>
        </Layout>
      </Page>
    );
}

export default App

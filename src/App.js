import React from 'react';
import { Layout, Page, FooterHelp, Link } from '@shopify/polaris';

export function App() {
  return (
    <Page title="Polaris">
      <Layout>
        <Layout.Section>
          <FooterHelp>
            For more details on Polaris, visit our{' '}
            <Link url="https://polaris.shopify.com">style guide</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>
  );
}


import { FooterLocalized } from '@/components/FooterLocalized';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Sale | Aimora',
    description: 'Terms of sale for Aimora equipment sold to shooting ranges, foundations and associations: warranty, delivery, payment and liability.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/en/terms-of-sale',
        languages: {
            'pl': '/warunki-sprzedazy',
            'en': '/en/terms-of-sale',
        },
    },
};

export default function TermsOfSalePage() {
    return (
        <LegalLayout
            title="Terms of Sale"
            updatedLabel="Effective from 4 September 2026"
            footer={<FooterLocalized locale="en" />}
        >
            <p>
                The seller is <strong>Aimora</strong>. Full identification and billing details of the
                Seller are set out in the quotation and on the invoice. Contact:{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
            <p>
                These terms are a translation provided for convenience. In case of any discrepancy,{' '}
                <a href="/warunki-sprzedazy">the Polish version</a> prevails.
            </p>

            <h2>§ 1. Scope</h2>
            <ol>
                <li>
                    These Terms of Sale (the <strong>&quot;Terms&quot;</strong>) apply to all
                    contracts for the sale of <strong>Aimora</strong> electronic training targets and
                    accessories (the <strong>&quot;Equipment&quot;</strong>) concluded by the Seller.
                </li>
                <li>
                    The Terms apply <strong>only to sales to businesses, foundations, associations
                    and other institutional entities</strong> (the &quot;Buyer&quot;). They do not
                    apply to sales to consumers, nor to sole traders for whom the purchase is not of
                    a professional character.
                </li>
                <li>
                    The Terms form an integral part of every contract of sale. The Buyer receives
                    them together with the quotation or order confirmation, and acceptance of the
                    Equipment constitutes acceptance of the Terms.
                </li>
                <li>
                    The Buyer&apos;s own terms, in particular its own standard forms,{' '}
                    <strong>do not bind the Seller</strong> unless expressly accepted by the Seller
                    in writing.
                </li>
                <li>Individually negotiated written provisions take precedence over these Terms.</li>
            </ol>

            <h2>§ 2. Conclusion of the contract</h2>
            <ol>
                <li>
                    Information about the Equipment published on aimora.pl and in sales materials{' '}
                    <strong>does not constitute an offer</strong> within the meaning of the Polish
                    Civil Code, but an invitation to conclude a contract.
                </li>
                <li>
                    The contract is concluded when the Seller confirms the order or, absent a separate
                    confirmation, <strong>upon issue of the invoice</strong>.
                </li>
                <li>
                    Lead times quoted by the Seller are estimates. The Seller will inform the Buyer of
                    any material delay without undue delay.
                </li>
            </ol>

            <h2>§ 3. Prices and payment</h2>
            <ol>
                <li>
                    Prices are quoted in Polish zloty. Unless stated otherwise they are net prices, to
                    which VAT is added at the rate applicable on the invoice date.
                </li>
                <li>
                    Payment is made <strong>by bank transfer to the account shown on the
                    invoice</strong>, within the period stated on it. Payment is deemed made on the
                    date the Seller&apos;s account is credited.
                </li>
                <li>
                    In the event of late payment the Seller is entitled to <strong>statutory interest
                    for delay in commercial transactions</strong>.
                </li>
                <li>
                    <strong>The Equipment remains the property of the Seller until the price has been
                    paid in full</strong> (Art. 589 of the Polish Civil Code). Until then the Buyer
                    may not dispose of or encumber it.
                </li>
            </ol>

            <h2>§ 4. Delivery and passing of risk</h2>
            <ol>
                <li>Delivery is made to the address indicated by the Buyer, or by collection in person.</li>
                <li>
                    <strong>The risk of loss of or damage to the Equipment passes to the Buyer upon
                    its release to the Buyer or to the carrier.</strong>
                </li>
                <li>
                    The Buyer must inspect the shipment on receipt. Transport damage must be reported
                    within <strong>3 business days</strong> of receipt, together with photographic
                    evidence.
                </li>
            </ol>

            <h2>§ 5. Warranty</h2>
            <ol>
                <li>
                    The Seller grants a <strong>quality warranty for a period of 12 (twelve)
                    months</strong>, counted from the date the Equipment is released to the Buyer.
                </li>
                <li>
                    The warranty covers <strong>material and manufacturing defects</strong> revealed
                    during the warranty period where the Equipment has been used correctly and in
                    accordance with the user manual.
                </li>
                <li><strong>The warranty does not cover, in particular:</strong></li>
            </ol>
            <ul>
                <li>
                    mechanical damage arising from causes other than a defect in the Equipment,
                    including damage to the housing, LED module and detector caused by firing
                    ammunition at it or from distances inconsistent with the user manual,
                </li>
                <li>
                    consequences of using the Equipment contrary to its intended purpose or to the
                    user manual,
                </li>
                <li>
                    damage caused by flooding, moisture, high temperature or weather conditions,
                    where the Equipment was not rated as resistant to them,
                </li>
                <li>
                    consequences of repairs, modifications or interference carried out by anyone
                    other than the Seller or a party designated by the Seller,
                </li>
                <li>normal wear and tear,</li>
                <li>
                    damage arising after the passing of risk to the Buyer for reasons attributable
                    to the Buyer.
                </li>
            </ul>
            <p>
                <strong>4.</strong> Battery cells are covered by the warranty on the general terms set
                out in paragraph 1. A gradual decline in cell capacity with the number of charge
                cycles is normal wear and does not constitute a defect.
            </p>
            <p>
                <strong>5.</strong> Software updates for the detectors and the mobile app are provided
                free of charge during the warranty period. The Seller does not warrant that the app
                will work with every version of Android or every model of mobile device.
            </p>

            <h2>§ 6. Warranty claims</h2>
            <ol>
                <li>
                    Warranty claims should be sent to{' '}
                    <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>, quoting the invoice number,
                    a description of the defect and, where possible, photographic or video evidence.
                </li>
                <li>
                    A defect must be reported <strong>promptly after it is discovered and no later
                    than within 14 days</strong>.
                </li>
                <li>
                    The Seller will consider the claim within <strong>14 business days</strong> of
                    receiving it or, where the Equipment must be sent in, of receiving the Equipment.
                </li>
                <li>
                    <strong>The Seller chooses how the warranty is honoured</strong>: repair,
                    replacement with an item free of defects, or refund of the price. Where repair or
                    replacement proves impossible or disproportionately costly, the Seller will refund
                    the price of the defective item.
                </li>
                <li>
                    The Seller bears the cost of shipping the Equipment to the Seller under a
                    justified warranty claim. Where a claim is unjustified, shipping costs both ways
                    are borne by the Buyer.
                </li>
                <li>
                    Honouring a warranty claim <strong>does not extend</strong> the warranty period,
                    except where the Equipment is replaced with a new item — in which case the period
                    runs afresh for the replacement.
                </li>
            </ol>

            <h2>§ 7. Exclusion of statutory warranty for defects</h2>
            <ol>
                <li>
                    Pursuant to <strong>Art. 558 § 1 of the Polish Civil Code</strong>, the
                    Seller&apos;s liability under the statutory warranty for defects (rękojmia) is{' '}
                    <strong>excluded in full</strong>.
                </li>
                <li>
                    The exclusion in paragraph 1 does not apply to sales to consumers, nor to natural
                    persons concluding a contract directly connected with their business activity
                    where it is not of a professional character for them.
                </li>
                <li>
                    The exclusion <strong>does not limit the Buyer&apos;s rights under the
                    warranty</strong> granted in § 5.
                </li>
            </ol>

            <h2>§ 8. Liability</h2>
            <ol>
                <li>
                    The Seller&apos;s liability for non-performance or improper performance of the
                    contract is <strong>limited to the net price of the Equipment</strong> to which
                    the claim relates.
                </li>
                <li>
                    The Seller <strong>is not liable for the Buyer&apos;s lost profits</strong>, in
                    particular revenue not earned as a result of being unable to hold competitions or
                    training sessions.
                </li>
                <li>
                    The limitations in paragraphs 1 and 2 <strong>do not apply to damage caused
                    intentionally</strong> (Art. 473 § 2 of the Polish Civil Code), nor to liability
                    which by law cannot be excluded or limited.
                </li>
            </ol>

            <h2>§ 9. Personal data</h2>
            <ol>
                <li>
                    The Seller is the controller of the personal data of persons representing the
                    Buyer and of contact persons.
                </li>
                <li>
                    Data is processed in order to conclude and perform the contract, handle warranty
                    claims, settle payments and establish or pursue claims.
                </li>
                <li>
                    Detailed information, including legal bases, retention periods and data subject
                    rights, is set out in our{' '}
                    <a href="/en/privacy-policy">privacy policy</a>.
                </li>
            </ol>

            <h2>§ 10. Final provisions</h2>
            <ol>
                <li>
                    Matters not governed by these Terms are subject to Polish law, in particular the
                    Polish Civil Code.
                </li>
                <li>
                    Disputes are subject to the <strong>court having jurisdiction over the
                    Seller&apos;s registered seat</strong>.
                </li>
                <li>
                    The Seller may amend these Terms. Contracts concluded before an amendment remain
                    subject to the Terms in force on the date of conclusion.
                </li>
                <li>
                    If any provision of these Terms is invalid, the remaining provisions remain in
                    force, and the invalid provision is replaced by the rule of law closest to its
                    commercial purpose.
                </li>
            </ol>
        </LegalLayout>
    );
}

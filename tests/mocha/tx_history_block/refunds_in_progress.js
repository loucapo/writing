refunds:

ALL THIS IS ON HOLD, WAITING FOR TX SETTLING TO WORK
too much is dependent on how that works to finalize testing yet


to force a bt_tx into settled state (this should apply to both purchases and refunds)
http://172.20.0.22:3080/v1/api/businessunit/dynamicBooks/transactions/27kqw3/settle

to force a bt_tx into declined state (this should apply to both purchases and refunds)
http://172.20.0.22:3080/v1/api/businessunit/dynamicBooks/transactions/27kqw3/decline

GET http://stemeco/v1/api/businessunit/<buname>/transactions/<bttxid>/<settle|decline>



ADMIN::
when tx is settled
  refund is allowed to be initiated
when tx is pending
  refund is disallowed from being initiated
when tx is declined
  refund .... ask jordan.  should not even show up?

when refund is initiated
  if refund is declined
  - original purchase should not change state
  - refund link should remain present?
  - receipt for the declined refund should... ?
  if refund is pending
  -
  if refund is settled
  -

USER::
when tx is settled
when tx is pending
when tx is declined

  - write up the bug after double checking -- does the receipt for a declined purchase still show hey thanks for buying
  this shit we successfully charged you for?  i bet it does.
